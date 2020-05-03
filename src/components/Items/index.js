import React from 'react';
import Category from '../Category';

function Items(props) {
    const { items, isChecked, handleTemplateChange } = props;

    return (
        <div>
            {items.map((g) => (
                <Category
                    category={g.category}
                    items={g.items}
                    isChecked={isChecked}
                    handleItemChange={handleTemplateChange}
                />
            ))}
        </div>
    );
}

export default Items;
