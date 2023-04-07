const emailFormat = (value, error) => /.+@.+/.test(value) || error;
const required = (value, error) => !!value || error;
const requiredField = (value, error = "This field is reqired") => !!value || error

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const passwordRule = (value, error) => {
return passwordPattern.test(value) || error;
};

export const passwordRules = [
(value) => required(value, "Hasło jest wymagane"),
(value) =>
    passwordRule(
    value,
    "Minimum 8 znaków, conajmniej jedna wielka litera, numer oraz znak specjalny."
    ),
];

export const emailRules = [
    (value) => required(value, "Email wymagany"),
    (value) => emailFormat(value, "Niepoprawny format"),
  ];

export const passwordRuleLogin = [
(value) => required(value, "Hasło wymagane"),
];
