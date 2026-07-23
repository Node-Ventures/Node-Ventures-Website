// ContactForm — one form for general questions AND investment inquiries.
// First/last name + email + message required; phone + company optional;
// inquiry-type checkboxes. On submit it POSTs to Netlify Forms and swaps the
// form for a thank-you panel.
// NETLIFY: this form is rendered by React at runtime, so Netlify's deploy-time
// bot can't see it. Detection is handled by the hidden static <form name="contact">
// in contact.html; here we POST the same fields (form-urlencoded, incl.
// form-name=contact) to "/". Field names MUST stay in sync with that hidden form.
// Configure the email notification to admin@nodeventures.ca in the Netlify
// dashboard (Forms → Form notifications). Submissions only reach Netlify on a
// deployed Netlify site — a local static server will no-op the POST (handled).
const NV_FIELD_BORDER = "var(--color-muted)"; // darker neutral — WCAG-legible on cream
const NV_FIELD_FILL = "var(--color-canvas)";  // light cream fill

function NvField({ label, required, hint, type = "text", value, onChange, name, textarea, rows }) {
  const [focused, setFocused] = React.useState(false);
  const id = "nv-" + name;
  const border = focused ? "var(--color-primary)" : NV_FIELD_BORDER;
  const shared = {
    id, name, value, onChange, required,
    onFocus: () => setFocused(true), onBlur: () => setFocused(false),
    style: {
      width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 16,
      color: "var(--color-ink)", background: NV_FIELD_FILL, border: "1px solid " + border,
      borderRadius: "var(--radius-md)", outline: "none",
      boxShadow: focused ? "var(--ring-focus)" : "none",
      transition: "border-color .12s ease, box-shadow .12s ease",
    },
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--color-ink)" }}>
        {label}{required ? <span style={{ color: "var(--color-primary)" }}> *</span> : null}
      </label>
      {textarea
        ? <textarea {...shared} rows={rows || 6} style={{ ...shared.style, resize: "vertical", padding: "10px 14px", lineHeight: 1.55 }} />
        : <input {...shared} type={type} style={{ ...shared.style, height: 44, padding: "0 14px" }} />}
    </div>
  );
}

function ContactForm() {
  const { Button } = window.NodeVenturesDesignSystem_1fd7b8;
  const href = window.NV_HREF || (() => "#");
  const INQUIRIES = ["General inquiry", "Joining a venture", "Starting a venture", "Venture fund", "Debt fund", "Asset fund"];
  const INITIAL = { firstName: "", lastName: "", email: "", phone: "", company: "", message: "" };
  const [form, setForm] = React.useState(INITIAL);
  const [types, setTypes] = React.useState([]);
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (t) => setTypes((cur) => cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]);
  const reset = () => { setForm(INITIAL); setTypes([]); setSent(false); };

  // Netlify wants application/x-www-form-urlencoded with a form-name field.
  const encode = (data) =>
    Object.keys(data).map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k])).join("&");

  const submit = (e) => {
    e.preventDefault();
    const payload = {
      "form-name": "contact",
      "bot-field": "", // honeypot — real visitors leave this empty
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      company: form.company,
      inquiryType: types.length ? types.join(", ") : "",
      message: form.message,
    };
    setSent(true);
    // POST to Netlify Forms. Guarded so a local/static preview (no Netlify
    // backend) still shows the thank-you panel instead of erroring.
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(payload),
    }).catch(() => { /* no backend (e.g. local preview) — thank-you still shown */ });
  };

  const Check = ({ label }) => {
    const on = types.includes(label);
    return (
      <button type="button" role="checkbox" aria-checked={on} onClick={() => toggle(label)}
        style={{
          display: "inline-flex", alignItems: "center", gap: 10, padding: "11px 16px", cursor: "pointer",
          fontFamily: "var(--font-body)", fontSize: "var(--body-size)", textAlign: "left",
          background: on ? "var(--color-primary)" : NV_FIELD_FILL,
          color: on ? "var(--color-on-primary)" : "var(--color-ink)",
          border: on ? "1px solid var(--color-primary)" : "1px solid " + NV_FIELD_BORDER,
          borderRadius: "var(--radius-md)", transition: "background .12s ease, border-color .12s ease, color .12s ease",
        }}>
        <span aria-hidden="true" style={{
          width: 16, height: 16, flex: "none", display: "grid", placeItems: "center",
          border: on ? "1px solid var(--color-on-primary)" : "1px solid var(--color-muted)",
          borderRadius: 3, background: "transparent",
        }}>
          {on ? (
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-on-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          ) : null}
        </span>
        {label}
      </button>
    );
  };

  if (sent) {
    return (
      <div style={{ textAlign: "center", padding: "56px 32px", border: "1px solid " + NV_FIELD_BORDER, borderRadius: "var(--radius-lg)", background: NV_FIELD_FILL }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--h3-weight)", fontSize: "var(--h3-size)", letterSpacing: "var(--h3-track)", color: "var(--color-ink)", margin: 0 }}>Thank you for submitting.</h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--body-lg-size)", lineHeight: "var(--body-lg-line)", color: "var(--color-body)", margin: "12px 0 26px" }}>
          We will get back to you soon.
        </p>
        <Button variant="secondary" size="md" onClick={reset}>Ask another question</Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div className="nv-contact-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <NvField label="First name" required name="firstName" value={form.firstName} onChange={set("firstName")} />
        <NvField label="Last name" required name="lastName" value={form.lastName} onChange={set("lastName")} />
        <NvField label="Email" required type="email" name="email" value={form.email} onChange={set("email")} />
        <NvField label="Phone" type="tel" name="phone" value={form.phone} onChange={set("phone")} />
      </div>
      <NvField label="Company" name="company" value={form.company} onChange={set("company")} />

      <fieldset style={{ border: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
        <legend style={{ padding: 0, marginBottom: 12, fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--color-ink)" }}>What should we talk about?</legend>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {INQUIRIES.map((t) => <Check key={t} label={t} />)}
        </div>
      </fieldset>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <NvField label="Message" required textarea rows={6} name="message" value={form.message} onChange={set("message")} />
        <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.5, color: "var(--color-muted)" }}>
          <span style={{ color: "var(--color-primary)" }}>*</span> Required fields. By sending this form, you agree to our handling of your information as described in our <a href={href("Privacy")}>privacy policy</a>.
        </p>
      </div>

      <div>
        <Button variant="primary" size="lg" type="submit">Send message</Button>
      </div>
    </form>
  );
}
window.ContactForm = ContactForm;
