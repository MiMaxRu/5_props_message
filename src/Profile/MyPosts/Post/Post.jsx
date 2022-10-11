
import pos from './Post.module.css';

const Post = (props)=>{
  return (
      <div className={pos.item}>
        <img src = 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614560341_16-p-ikonki-na-belom-fone-18.png'></img>
        <span>{props.message}</span>
        <div><button onClick={like}></button></div>
  </div>
      )
}

function like(){
  alert("Вы поставили лайк!");
}

export default Post;