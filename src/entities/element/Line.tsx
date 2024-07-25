import styled from "@emotion/styled";

export const MidPointLine = styled.div`
  border-top: 1px solid white;
  margin-top: 30px;
  margin-bottom: 40px;
  width: 295px;
  height: 0px;
  color: white;

  ::after {
    content: "◆";
    position: relative;
    top: -12px;
    left: calc(50% - 8px);
  }
`;

export const GrayLine = styled.div`
  border-top: 1px solid gray;
  margin-top: 10px;
  width: 100%;
  height: 0px;
`;
