<template>
  <div>
    <h1>{{animal.name}} ({{$route.params.species}})</h1>
    <p>Age: {{animal.age}} years old</p>
    <p>Breed: {{animal.breed}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      animal: {}
    };
  },
  computed: {
    ...mapState(["dogs", "cats"])
    // cats(){
    //     return this.$store.state.cats
    // }
  },
  mounted() {
    let animal = this[this.$route.params.species][this.$route.params.id]; //this.cats or this['cats']
    this.animal = animal;
  }
};
</script>

