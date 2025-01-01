import { ref } from 'vue';
import { db } from '../services/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

export function useCards() {
  const cards = ref([]);
  const loading = ref(true);

  const fetchCards = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'cards'));
      cards.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error fetching cards:', error);
    } finally {
      loading.value = false;
    }
  };

  const addCard = async (card) => {
    try {
      await addDoc(collection(db, 'cards'), card);
      await fetchCards();
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  const deleteCard = async (id) => {
    try {
      await deleteDoc(doc(db, 'cards', id));
      await fetchCards();
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  return {
    cards,
    loading,
    fetchCards,
    addCard,
    deleteCard
  };
}