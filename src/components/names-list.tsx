export function NamesList({ namesList, onItemClick, isShortList = false }) {
    return (
        <ul>
            {namesList.map(({ id, name, sex }) => (
                <li className={sex} key={id}>
                    {isShortList && (
                        <span
                            className='remove-icon'
                            onClick={(e) => {
                                e.stopPropagation();
                                onItemClick(id);
                            }}
                        >
                            ×
                        </span>
                    )}
                    <button onClick={() => onItemClick(id)}>{name}</button>
                </li>
            ))}
        </ul>
    );
}
