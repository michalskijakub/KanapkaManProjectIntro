import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    en: {
      home: {
        name: 'BOOK A FIELD ',
        description: 'The website is designed to allow you to book a pitch of your choice for a specific period of time',
        title: "PITCH RESERVATION",
        home : "HOME",
        about: "ABOUT",
        login: "LOGIN",
        register: "REGISTER",
        resetPassword: "RESET PASSWORD",
        dashboard: "DASHBOARD",
        logout: "LOGOUT"
      },
      main: {
          login: 'Sign in',
          register: 'Register',
          loginGoogle: 'Sign in with Google',
          forgotPassword: "Don't you remember the password?",
          registerGoogle: "Sign up with Google",
          resetPassword: "Reset password",
          haveAccount: "Already have an account? Sign in",
          loginDescription: "LOGIN",
          registerDescription: "REGISTER",
          statuteDescription: "I accept the terms and conditions",
          openStatute: "Open in a new window",
          resetPasswordDescription: "RESET PASSWORD",
          email: "Email",
          password: "Password",
          confirmPassword: "Confirm password",
          save: "Save",
          cancel: "Cancel",
          panel: "Dashboard"

      },
      list: {
          name: "Team name",
          date: "Date",
          from: "From",
          to: "To",
          place: "Place",
          option: "Option",
          edit: "Edit",
          delete: "Delete",
          addReservation: "ADD RESERVATION",
          addNewReservation:"Add Reservation",
          editReservation: "Edit Reservation"

      }
    },
    pl: {
        home: {
          name: 'ZAREZERWUJ BOISKO',
          description: 'Strona ma za zadanie umożliwić zarezerwowanie wybranego przez siebie boiska na określony czas',
          title: "REZERWACJA BOISK",
          home : "STRONA GŁÓWNA",
          about: "O PROJEKCIE",
          login: "LOGOWANIE",
          register: "REJESTRACJA",
          resetPassword: "RESETUJ HASŁO",
          dashboard: "PANEL",
          logout: "WYLOGUJ"
        },
        main: {
            login: 'Zaloguj się',
            register: 'Zarejestruj się',
            loginGoogle: 'Zaloguj się przez Google',
            forgotPassword: "Nie pamiętasz hasła?",
            registerGoogle: "Zarejestruj się przez Google",
            resetPassword: "Zresetuj hasło",
            haveAccount: "Masz już konto? Zaloguj się",
            loginDescription: "LOGOWANIE",
            registerDescription: "REJESTRACJA",
            statuteDescription: "Akceptuję regulamin",
            openStatute: "Otwórz w nowym oknie",
            resetPasswordDescription: " RESETUJ HASŁO",
            email: "Email",
            password: "Hasło",
            confirmPassword: "Powtórz hasło",
            save: "Zapisz",
            cancel: "Anuluj",
            dashboard: "Panel"

        },
        list: {
            name: "Nazwa Drużyny",
            date: "Data",
            from: "Od",
            to: "Do",
            place: "Miejsce",
            option: "Opcje",
            edit: "Edytuj",
            delete: "Usuń",
            addReservation: "DODAJ REZERWACJE",
            addNewReservation:"Dodaj Rezerwacje",
            editReservation: "Edytuj Rezerwacje"

        }
      },
  }

const i18n = new VueI18n({
    locale: 'pl',
    messages
})

export default i18n
