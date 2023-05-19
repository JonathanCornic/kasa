import './Tag.css'

const Tag = ({ tags }) => {
    return (
        <div className="tag-container">
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tag
