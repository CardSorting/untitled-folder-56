<template>
  <div class="card-manager">
    <h2>My Trading Cards</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="card-list">
        <div v-for="card in cards" :key="card.id" class="card">
          <h3>{{ card.name }}</h3>
          <p>{{ card.description }}</p>
          <img :src="card.imageUrl" alt="Card image" class="card-image">
          <button @click="deleteCard(card.id)">Delete</button>
        </div>
      </div>
      
      <div class="add-card">
        <h3>Add New Card</h3>
        <form @submit.prevent="addCard">
          <input v-model="newCard.name" placeholder="Card name" required>
          <textarea v-model="newCard.description" placeholder="Card description"></textarea>
          <input v-model="newCard.imageUrl" placeholder="Image URL" required>
          <button type="submit">Add Card</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCards } from '../composables/useCards';

const { cards, loading, fetchCards, addCard: addCardToFirestore, deleteCard } = useCards();
const newCard = ref({
  name: '',
  description: '',
  imageUrl: ''
});

const addCard = async () => {
  await addCardToFirestore(newCard.value);
  newCard.value = { name: '', description: '', imageUrl: '' };
};
</script>

<style scoped>
.card-manager {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}

.card-image {
  max-width: 100%;
  height: auto;
  margin: 10px 0;
}

.add-card {
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>