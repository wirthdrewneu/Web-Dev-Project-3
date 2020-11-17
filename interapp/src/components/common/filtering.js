import React from 'react';
import "../../css/designs.css";

export default function Filters ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) {
    return (
        <div class="filter-by shadow">
            <p className="header-std padding-std no-margin full-width center-text head-text">Filter By</p>
            <ul class="list-group">
                { items.map ((item, index) => 
                    <li 
                        onClick={() => onItemSelect(item)}
                        key={item[valueProperty]}
                        tabIndex={index}
                        class={(item.stage === selectedItem) ? "list-group-item active" : "list-group-item"}>
                            {item[textProperty]}
                    </li>
                )}
            </ul>
        </div>
    );
}