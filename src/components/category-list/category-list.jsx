import { useState } from 'react';

function CategoryList({ items, onClick }) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (idx) => setActiveItem(idx);

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                {
                    items && items.map((item, idx) => (
                        <li
                            className={activeItem === idx ? 'active' : ''}
                            onClick={() => onSelectItem(idx)}
                            key={`${item}_${idx}`}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CategoryList;