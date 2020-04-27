import styled, { css } from 'styled-components';

const getButtonStyles = props => {
    if (props.updateBtn) {
        return  UpdateBtn;
    } else if (props.primaryBig) {
        return BtnPrimaryBig;
    } else if (props.btnLink) {
        return BtnLink;
    } else if (props.btnFollowGreen) {
        return BtnFollowGreen;
    } else if (props.btnFollowGrey) {
        return BtnFollowGrey;
    } else if (props.btnForm) {
        return BtnForm;
    } else if (props.disable) {
        return Disabled;
    } else {
        return StyledButton
    }
};


export const StyledButton = styled.button`
    width: 150px;
    height: 36px;
    background: #03A87C;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    border: none;
    opacity: 100%;
    outline: none;
    color: white;
    border-radius: 3px;

    &:hover {
        background-color: #029E74;
        cursor: pointer;
    }
    ${getButtonStyles}
`;

export const Disabled = css`
    width: 350px;
    height: 38px;
    background: #03A87C;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    border: none;
    outline: none;
    color: white;
    border-radius: 3px;
    &:hover {
        cursor: not-allowed;
    }
    opacity: 0.5; 
`;

export const BtnForm = css`
    width: 350px;
    height: 38px;
    background: #03A87C;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    border: none;
    opacity: 100%;
    outline: none;
    color: white;
    border-radius: 3px;

    &:hover {
        background-color: #029E74;
        cursor: pointer;
    }
`;

export const BtnPrimaryBig = css`
    width: 337px;
    height: 61px;
    background: #03A87C;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    border: none;
    &:hover {
        background-color: #029E74;
        cursor: pointer;
    }
`;

export const UpdateBtn = css`
    width: 80px;
    height: 34px;
    background-color: white;
    border: 1px solid;
    border-color: grey;
    font-size: 11px;
    font-weight: 500;
    color: black;
    text-align: center;
    border-radius: 5px;
    &:hover {
        border-color: black;
        cursor: pointer;
        color: black;
        background-color: white;
    }
`;

export const BtnLink = css`
    width: fit-content;
    font-size: 14px;
    text-transform: uppercase;
    color: #03A87C;
    border: none;
    background-color: white;
    &:hover {
        color: green;
        border: none;
        background-color: white;
    }
`;

export const BtnFollowGreen = css`
    width: 70px;
    height: 32px;
    background-color: white;
    border: 1px solid;
    border-color: #03A87C;
    font-size: 12px;
    font-weight: 500;
    color: #03A87C;
    text-align: center;
    border-radius: 5px;
    &:hover {
        border-color: green;
        cursor: pointer;
        color: green;
        background-color: white;
    }
`;

export const BtnFollowGrey = css`
    width: 70px;
    height: 32px;
    background-color: #F2F2F2;
    border: 1px solid;
    border-color: grey;
    font-size: 12px;
    font-weight: 500;
    color: black;
    text-align: center;
    border-radius: 5px;
    &:hover {
        border-color: black;
        cursor: pointer;
        color: black;
        background-color: #F2F2F2;
    }
`;
