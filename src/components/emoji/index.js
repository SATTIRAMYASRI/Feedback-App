import './index.css'

const EmojiAdder = props => {
  const {eachObject, onEmojiClicked} = props
  const {id, name, imageUrl} = eachObject

  const emojiClicked = () => {
    onEmojiClicked()
  }

  return (
    <li className="li-container">
      <button type="button" className="button" onClick={emojiClicked}>
        <img className="emoji-img" src={imageUrl} alt={name} />
      </button>
      <p className="emoji-name">{eachObject.name}</p>
    </li>
  )
}
export default EmojiAdder
