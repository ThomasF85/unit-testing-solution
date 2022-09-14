function toggleBookmark(cards, id) {
  return cards.map((card) =>
    card.id === id ? { ...card, bookmarked: !card.bookmarked } : card
  );
}

export { toggleBookmark };
