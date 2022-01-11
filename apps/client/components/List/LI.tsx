import styled from "styled-components"

const MyLI = styled.li`

`

export const LI = (props) => {
    const children = props.children
    return (
        <MyLI>
            {children}
        </MyLI>
    )
}

