import {
  Prototype,
  MiniPrototype,
  BookmarkPrototype,
  SmallBookmarkPrototype,
} from "@/entities/element/Prototype";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface PrototypeProp {
  id: 0;
  name: string;
  thumbnailUrl: string;
  investCount: 0;
  reqTickets: 0;
  bookmark: true;
}
interface MiniPrototypeProp {
  id: 0;
  name: string;
  thumbnailUrl: string;
  reqTickets: 0;
  dday: 0;
  bookmark: true;
}

export const Prototypes = ({
  type,
  prototypes,
}: {
  type: string;
  prototypes: PrototypeProp[] | MiniPrototypeProp[];
}) => {
  return (
    <>
      <Container>
        {prototypes.map((prototype: PrototypeProp | MiniPrototypeProp) => {
          return type === "popular" ? (
            <Prototype
              key={prototype.id}
              prototype={prototype as PrototypeProp}
            />
          ) : (
            <MiniPrototype
              key={prototype.id}
              prototype={prototype as MiniPrototypeProp}
            />
          );
        })}
      </Container>
    </>
  );
};

interface BookmarkProp {
  userId: 0;
  products: [
    {
      productId: 0;
      eventId: 0;
      name: string;
      reqTickets: 0;
      thumbnailUrl: string;
      count: 0;
    }
  ];
}
interface ProductProp {
  productId: 0;
  eventId: 0;
  name: string;
  reqTickets: 0;
  thumbnailUrl: string;
  count: 0;
}
export const BookmarkPrototypes = ({
  prototype,
}: {
  prototype: BookmarkProp;
}) => {
  return (
    <Container>
      {prototype.products.map((prototype: ProductProp) => (
        <BookmarkPrototype key={prototype.eventId} prototype={prototype} />
      ))}
    </Container>
  );
};

export const SmallBookmarkPrototypes = ({
  prototype,
}: {
  prototype: BookmarkProp;
}) => {
  return (
    <Container>
      {prototype.products.map((prototype: ProductProp, index) =>
        index < 2 ? (
          <SmallBookmarkPrototype
            key={prototype.eventId}
            prototype={prototype}
          />
        ) : null
      )}
    </Container>
  );
};
