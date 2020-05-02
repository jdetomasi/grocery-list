import React from 'react';
import CategoryPanel from '../CategoryPanel';
import items from '../../items';

function Template() {
    return (
        <div>
            {items.map(g =>
                <CategoryPanel category={g.category} items={g.items} />
            )}
        </div>
    );
}

export default Template;
