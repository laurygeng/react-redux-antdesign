import React, { useState, useEffect, useReducer } from 'react';

export default function Eat (dispatch) {
    console.log(dispatch)
    return (
        <div>
            这是一个子组件，叫吃，因为我饿了
            我想在饿的时候告诉我的爸爸，快点来喂我
            <button onClick={() => dispatch({type: 'feedme'})}>喂我</button>
        </div>
    );
}

