import React from 'react'
import styled from 'styled-components'

import Glyph from './Glyph'

function Container({ glyphs, className, onClick }) {
    return (
        <div className={className}>
            {glyphs.length > 0 ? (
                glyphs.map((data, index) => (
                    <Glyph key={index} data={data} onClick={onClick} />
                ))
            ) : (
                <span>{'no results'}</span>
            )}
        </div>
    )
}

export default styled(Container)`
    border: 1px solid #dadada;
    border-width: 1px 0 0 1px;
    flex-wrap: wrap;
    overflow: auto;
    display: flex;

    & * {
        box-sizing: border-box;
    }
`
