export const DeleteBotao = ({ deleteCard, cardId }) => {
  return (
    <button onClick={() => deleteCard(cardId)} className="deleteBotao">
      <img src="/imgs/red-trash-can-icon.png" alt="Delete" />
    </button>
  );
};
