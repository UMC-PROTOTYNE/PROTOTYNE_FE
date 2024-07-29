import { Prototype, MiniPrototype } from "@/entities/element/Prototype";
import styled from "@emotion/styled";


const Container = styled.div`
  display: flex;
  padding-bottom: 5px;
`;


interface PrototypeProp {
    path: string, 
    label: string, 
    name: string, 
    isBookmark: boolean,
}

export const Prototypes = ({ type, prototype } : { type: string, prototype: PrototypeProp[] }) => {
    return (
        <>
            <Container>
                {(prototype).map((prototype: PrototypeProp) => (
                    type === "지금 인기있는 시제품 >" ? 
                    <Prototype 
                    key={prototype.name}
                    prototype={prototype}
                    /> :
                    <MiniPrototype
                    key={prototype.name}
                    prototype={prototype}
                    />
                ))}
            </Container>
        </>
    );
};