import "./deletebotao.css"

export const DeleteBotao = (props) => {

  const deleteCard = () => {
    props.deleteCard();
  };

  return (
    <button onClick={deleteCard}  className="deleteBotao">
      <img src="/imgs/red-trash-can-icon.png" alt="Delete" />
    </button>
  );
};
