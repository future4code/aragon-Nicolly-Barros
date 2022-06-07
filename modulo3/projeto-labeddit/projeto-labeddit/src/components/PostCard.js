

export default function PostCard(props) {

    const converterData = (date) => {
        const day = date.substring(8, 10)
        const month = date.substring(5, 7)
        const year = date.substring(0, 4)
        return `${day}/${month}/${year}`
    }

    return (
        <article>

            <h3>{props.post.title}</h3>
            <h4>Autor: {props.post.userId}</h4>
            <p>Postado em: {converterData(props.post.createdAt)}</p>
            <img src={"https://picsum.photos/200/300?random=" + props.post.id}/>
            <p>Descrição: {props.post.body}</p>
            <p>Votos: {props.post.voteSum ? props.post.voteSum : 0}</p>
            <button>Votar em "Não Gostei"</button>
            <br />
            <button>Votar em "Gostei"</button>
            <p>Comentários: {props.post.commentCount ? props.post.commentCount : 0}</p>
            <button>Ver comentários</button>
            <hr/>

        </article >
    )
}