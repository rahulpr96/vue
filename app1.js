import Numbers from './models.js';

const app = Vue.createApp({
      data() {
        return {
         models,
         search: '',
         postList: [
           {title: 'Tata', img: './assets/Tata logo.png', ...Numbers},
           {title: 'BMW', img: './assets/BMW logo.png'},
           {title: 'VolksWagen', img: './assets/VolksWagen logo.png'},
           {title: 'Maruthi', img: './assets/Maruthi-Suzuki logo.png'}
          ]
        };
      },  
      computed: {
        filteredList() {
          return this.postList.filter(postList => {
            return postList.title.toLowerCase().includes(this.search.toLowerCase());
          });
        }
      },
      created() {
          console.log(this.postList);
      }
});
app.mount('#app');