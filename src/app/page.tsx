import Wrapper from "@/components/Wrapper";
import Card from "@/components/Card";
import Container from "@/components/Container";
import CommandBar from "@/components/CommandBar";
import CardsContainer from "@/components/CardsContainer";

//  p-16
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="h-[90px] mb-4">
        <CommandBar />
      </div>
      <Container>
        <Wrapper>
          <h2 className="px-16">
            Recent
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <CardsContainer>
            <Card
              title="Logs"
              description="Updated 15 minutes ago"
              updates="12 New Logs since update"
              stats={
                <div className="flex flex-col justify-between h-full">
                  <p>Logs / Time</p>
                  <div>Some stats</div>
                  <p className="font-light text-sm">Jan 2, 08:18:00</p>
                </div>
              }
            />
          </CardsContainer>
        </Wrapper>
        <Wrapper>
          <h2 className="px-16">
            Saved
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <CardsContainer>
            <Card
              title="Access"
              description="Updated 15 minutes ago"
              updates="12 New Logs since update"
            />
            <Card
              title="Observability"
              description="Updated 15 minutes ago"
              updates="12 New Logs since update"
            />
            <Card
              title="Sidecars"
              description="Updated 15 minutes ago"
              updates="12 New Logs since update"
            />
            <Card
              title="Logs"
              description="Updated 15 minutes ago"
              updates="12 New Logs since update"
            />
          </CardsContainer>
        </Wrapper>
      </Container>
    </main>
  );
}
