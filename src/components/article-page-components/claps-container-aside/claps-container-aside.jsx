import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import { 
    ClapsAsideStyled, 
    IconWrapper, 
    IconWrapperSave, 
    Number
} from './claps-container-aside.styles';


import ClapsIcon from '../../../assets/icons/claps-icon-2.svg';
import IconSave from '../../../assets/icons/save-new-2.png';


const ClapsAside = () => (
    <ClapsAsideStyled>
        <IconWrapper>
            <img src={ClapsIcon} alt="claps-icon"/>
        </IconWrapper>
        <Number>400</Number>
        <IconWrapperSave>
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Save story</Tooltip>}>
                <span className="d-inline-block">
                    <img src={IconSave} alt="icon-save" style={{ hoverEvents: 'none' }}/>
                </span>
            </OverlayTrigger> 
        </IconWrapperSave>
    </ClapsAsideStyled>
);

export default ClapsAside;