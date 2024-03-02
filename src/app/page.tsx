import Wrapper from "@/components/Wrapper";
import Card from "@/components/Card";
import Container from "@/components/Container";
import CommandBar from "@/components/CommandBar";

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
          <div className="max-w-full">
            <div className="flex flex-nowrap gap-4 whitespace-nowrap overflow-x-auto px-16">
              <Card
                title="Logs"
                description="Updated 15 minutes ago"
                updates="12 New Logs since update"
                stats={
                  <div>
                    <p className="">Logs / Time</p>
                    <p>Logs / Time</p>
                  </div>
                }
              />
              <Card
                title="Logs"
                description="Updated 15 minutes ago"
                updates="12 New Logs since update"
              />
              <Card
                title="Logs"
                description="Updated 15 minutes ago"
                updates="12 New Logs since update"
              />
              <Card
                title="Logs"
                description="Updated 15 minutes ago"
                updates="12 New Logs since update"
              />
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <h2>
            Saved
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div className="flex flex-row gap-4">
            <Card />
          </div>
        </Wrapper>
      </Container>
    </main>
  );
}
