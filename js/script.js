const { createApp } = Vue;

createApp({
  data() {
    return {
      numberOfEmail: 0,
      emails: [],
    };
  },
  created() {
  },
  methods: {
    generateEmails() {
      while(this.numberOfEmail < 10){
        axios
        .get(
          `https://flynn.boolean.careers/exercises/api/random/mail`
        )
        .then((resp) => {
          console.log(resp.data.response);
          this.emails.push(resp.data.response);
        });
        this.numberOfEmail++
      }
      this.emails = [];
      this.numberOfEmail = 0
    },
  }
}).mount("#app");