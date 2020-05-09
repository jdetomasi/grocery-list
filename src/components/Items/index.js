import React from 'react';
import Category from '../Category';

function Items(props) {
    const { items, isChecked, handleTemplateChange, hideDone } = props;

    const hasShowableItems = (g) => {
        let items = g.items.filter(i => hideDone && !i.done || !hideDone);
        return items.length > 0
    }

    return (
        <div>
            {items.filter(hasShowableItems).map((g) => (
                <Category
                    category={g.category}
                    items={g.items.filter(i => hideDone && !i.done || !hideDone)}
                    isChecked={isChecked}
                    handleItemChange={handleTemplateChange}
                />
            ))}
        </div>
    );
}

export default Items;
