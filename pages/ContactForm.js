function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ContactForm — one form for general questions AND investment inquiries.
// First/last name + email + message required; phone + company optional;
// inquiry-type checkboxes. On submit it composes an email to
// admin@nodeventures.ca and swaps the form for a thank-you panel.
// NOTE (standalone caveat): with no backend this hands off to the visitor's
// mail client via mailto:. A production deploy should POST to a form service
// or serverless endpoint that delivers to admin@nodeventures.ca instead.
const NV_FIELD_BORDER = "var(--color-muted)"; // darker neutral — WCAG-legible on cream
const NV_FIELD_FILL = "var(--color-canvas)"; // light cream fill

function NvField({
  label,
  required,
  hint,
  type = "text",
  value,
  onChange,
  name,
  textarea,
  rows
}) {
  const [focused, setFocused] = React.useState(false);
  const id = "nv-" + name;
  const border = focused ? "var(--color-primary)" : NV_FIELD_BORDER;
  const shared = {
    id,
    name,
    value,
    onChange,
    required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--color-ink)",
      background: NV_FIELD_FILL,
      border: "1px solid " + border,
      borderRadius: "var(--radius-md)",
      outline: "none",
      boxShadow: focused ? "var(--ring-focus)" : "none",
      transition: "border-color .12s ease, box-shadow .12s ease"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--color-ink)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)"
    }
  }, " *") : null), textarea ? /*#__PURE__*/React.createElement("textarea", _extends({}, shared, {
    rows: rows || 6,
    style: {
      ...shared.style,
      resize: "vertical",
      padding: "10px 14px",
      lineHeight: 1.55
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({}, shared, {
    type: type,
    style: {
      ...shared.style,
      height: 44,
      padding: "0 14px"
    }
  })));
}
function ContactForm() {
  const {
    Button
  } = window.NodeVenturesDesignSystem_1fd7b8;
  const INQUIRIES = ["General inquiry", "Joining a venture", "Starting a venture", "Venture fund", "Debt fund", "Asset fund"];
  const INITIAL = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  };
  const [form, setForm] = React.useState(INITIAL);
  const [types, setTypes] = React.useState([]);
  const [sent, setSent] = React.useState(false);
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const toggle = t => setTypes(cur => cur.includes(t) ? cur.filter(x => x !== t) : [...cur, t]);
  const reset = () => {
    setForm(INITIAL);
    setTypes([]);
    setSent(false);
  };
  const submit = e => {
    e.preventDefault();
    const lines = [`Name: ${form.firstName} ${form.lastName}`.trim(), `Email: ${form.email}`, form.phone ? `Phone: ${form.phone}` : null, form.company ? `Company: ${form.company}` : null, `Inquiry type: ${types.length ? types.join(", ") : "Not specified"}`, "", "Message:", form.message].filter(l => l !== null).join("\n");
    const subject = `Node Ventures inquiry${types.length ? " — " + types.join(", ") : ""}`;
    const mailto = `mailto:admin@nodeventures.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    setSent(true);
    // Open the visitor's mail client after the thank-you paints. Guarded so a
    // blocked/absent handler never hangs the page.
    setTimeout(() => {
      try {
        window.open(mailto, "_blank");
      } catch (err) {/* no mail handler */}
    }, 0);
  };
  const Check = ({
    label
  }) => {
    const on = types.includes(label);
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      role: "checkbox",
      "aria-checked": on,
      onClick: () => toggle(label),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 16px",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--body-size)",
        textAlign: "left",
        background: on ? "var(--color-primary)" : NV_FIELD_FILL,
        color: on ? "var(--color-on-primary)" : "var(--color-ink)",
        border: on ? "1px solid var(--color-primary)" : "1px solid " + NV_FIELD_BORDER,
        borderRadius: "var(--radius-md)",
        transition: "background .12s ease, border-color .12s ease, color .12s ease"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 16,
        height: 16,
        flex: "none",
        display: "grid",
        placeItems: "center",
        border: on ? "1px solid var(--color-on-primary)" : "1px solid var(--color-muted)",
        borderRadius: 3,
        background: "transparent"
      }
    }, on ? /*#__PURE__*/React.createElement("svg", {
      width: "11",
      height: "11",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--color-on-primary)",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })) : null), label);
  };
  if (sent) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "56px 32px",
        border: "1px solid " + NV_FIELD_BORDER,
        borderRadius: "var(--radius-lg)",
        background: NV_FIELD_FILL
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--h3-weight)",
        fontSize: "var(--h3-size)",
        letterSpacing: "var(--h3-track)",
        color: "var(--color-ink)",
        margin: 0
      }
    }, "Thank you for submitting."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--body-lg-size)",
        lineHeight: "var(--body-lg-line)",
        color: "var(--color-body)",
        margin: "12px 0 26px"
      }
    }, "We will get back to you soon."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      onClick: reset
    }, "Ask another question"));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nv-contact-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(NvField, {
    label: "First name",
    required: true,
    name: "firstName",
    value: form.firstName,
    onChange: set("firstName")
  }), /*#__PURE__*/React.createElement(NvField, {
    label: "Last name",
    required: true,
    name: "lastName",
    value: form.lastName,
    onChange: set("lastName")
  }), /*#__PURE__*/React.createElement(NvField, {
    label: "Email",
    required: true,
    type: "email",
    name: "email",
    value: form.email,
    onChange: set("email")
  }), /*#__PURE__*/React.createElement(NvField, {
    label: "Phone",
    type: "tel",
    name: "phone",
    value: form.phone,
    onChange: set("phone")
  })), /*#__PURE__*/React.createElement(NvField, {
    label: "Company",
    name: "company",
    value: form.company,
    onChange: set("company")
  }), /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      marginBottom: 12,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--color-ink)"
    }
  }, "What should we talk about?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12
    }
  }, INQUIRIES.map(t => /*#__PURE__*/React.createElement(Check, {
    key: t,
    label: t
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(NvField, {
    label: "Message",
    required: true,
    textarea: true,
    rows: 6,
    name: "message",
    value: form.message,
    onChange: set("message")
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 12,
      lineHeight: 1.5,
      color: "var(--color-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)"
    }
  }, "*"), " Required fields. By sending this form, you agree to our handling of your information as described in our ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "privacy policy"), ".")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit"
  }, "Send message")));
}
window.ContactForm = ContactForm;
