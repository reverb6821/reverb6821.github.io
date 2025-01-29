import { create } from 'zustand';

interface PaginationState {
    itemsShowed: number
    increaseItemsShowed: () => void
}

const usePaginationStore = create<PaginationState>()((set) => ({
    itemsShowed: 4,
    increaseItemsShowed: () => set((state) => ({ itemsShowed: state.itemsShowed + 4 })),
}));
export default usePaginationStore;