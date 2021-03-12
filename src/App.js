import React from "react";
import "./style.css";

import styled from "styled-components";
const TooltipText = styled.div`
  background: rgba(28, 56, 151, 0.9);
  color: #fff;
  width: 200px;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
  border: 2px black;
`;
const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  border: 2px yellow;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: -40px;
    top: -10px;
    position: absolute;
    //border: 10px solid transparent;
    //transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;
const TooltipCard = styled.div`
  position: relative;
  border: 2px black;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      økølkølk ølk ølk ølk ølk ljk ljl lkj lkj lkj lkj klkjlkjlkj lkj lkj lkj lkj 
      <TooltipCard>
         <TooltipText>
            Hover 
         </TooltipText>
         <TooltipBox>
            <p>First item has a long long tekst and even longer than you wouyd beleive</p>
         </TooltipBox>
      </TooltipCard>
      qerqerqwerq
      werqwerqwerqwerq werqwerq
    </div>
  );
}
