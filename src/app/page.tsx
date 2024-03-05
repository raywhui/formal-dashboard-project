import Wrapper from "@/components/Wrapper";
import Card from "@/components/Card";
import Container from "@/components/Container";
import CommandBar from "@/components/CommandBar";
import CardsContainer from "@/components/CardsContainer";
import Stats from "@/components/Stats";
import Heatmap from "@/components/Heatmap";
import { barGraphDataGenerator, heatMapDataGenerator } from "@/lib/utils";
import Bargraph from "@/components/Bargraph";
import { ArrowRight } from "lucide-react";

//  p-16
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="h-[90px] mb-4">
        <CommandBar />
      </div>
      <Container>
        <Wrapper>
          <h2 className="px-16 group">
            Recent
            <span className="inline-block ml-2 opacity-0 transition-all duration-400 ease-in-out group-hover:translate-x-2 group-hover:opacity-100 motion-reduce:transform-none">
              <ArrowRight className="text-brand-fill-600 text-lg" />
            </span>
          </h2>
          <CardsContainer>
            <Card
              title="Logs"
              description="Updated 15 minutes ago"
              updates="12 New Logs since update"
              stats={
                <div className="flex flex-col justify-between">
                  <p className="text-brand-text-secondary">Logs / Time</p>
                  <div className="py-4">
                    <div className="h-full">
                      <Bargraph
                        width={348}
                        height={102}
                        data={barGraphDataGenerator()}
                      />
                    </div>
                  </div>
                  <p className="font-light text-sm text-brand-text-tertiary">
                    Jan 2, 08:18:00
                  </p>
                </div>
              }
            />
          </CardsContainer>
        </Wrapper>
        <Wrapper>
          <h2 className="px-16 group">
            Saved
            <span className="inline-block ml-2 opacity-0 transition-all duration-400 ease-in-out group-hover:translate-x-2 group-hover:opacity-100 motion-reduce:transform-none">
              <ArrowRight className="text-brand-fill-600 text-lg" />
            </span>
          </h2>
          <CardsContainer>
            <Card
              title="Access"
              description="Updated 15 minutes ago"
              updates="12 New Logs since update"
              stats={
                <div className="flex flex-col justify-between h-full">
                  <p className="text-brand-text-secondary">
                    Contributions over 30 days
                  </p>
                  <div className="w-full py-4">
                    <Heatmap
                      width={348}
                      height={102}
                      data={heatMapDataGenerator()}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-light text-brand-text-tertiary">
                      Total views
                    </p>
                    <p className="text-lg font-semibold text-brand-text-primary">
                      3,057
                    </p>
                    <div className="flex gap-1">
                      <p className="text-green-600 font-semibold text-xl">↗</p>
                      <p className="text-green-600 text-lg">24%</p>
                    </div>
                  </div>
                </div>
              }
            />
            <Card
              title="Observability"
              description="Updated 15 minutes ago"
              updates="12 New Logs since update"
              stats={
                <div className="flex flex-col justify-between h-full">
                  <p className="text-brand-text-secondary">
                    Queries in database
                  </p>
                  <div className="flex gap-2 py-4">
                    <Stats title="Total queries" stat="78,513" />
                    <Stats title="Weekly trend" stat="250%" />
                  </div>
                  <p className="font-light text-sm text-brand-text-tertiary">
                    Jan 2, 08:18:00
                  </p>
                </div>
              }
            />
            <Card
              title="Sidecars"
              description="Updated 15 minutes ago"
              updates="12 New Logs since update"
              stats={
                <div className="flex flex-col justify-between h-full">
                  <p className="text-brand-text-secondary">
                    Queries in database
                  </p>
                  <div className="flex gap-2 py-4">
                    <Stats title="Total queries" stat="78,513" />
                    <Stats title="Weekly trend" stat="250%" />
                  </div>
                  <p className="font-light text-sm text-brand-text-tertiary">
                    Jan 2, 08:18:00
                  </p>
                </div>
              }
            />
            <Card
              title="Logs"
              description="Updated 15 minutes ago"
              updates="12 New Logs since update"
              stats={
                <div className="flex flex-col justify-between">
                  <p className="text-brand-text-secondary">Logs / Time</p>
                  <div className="py-4">
                    <div className="h-full">
                      <Bargraph
                        width={348}
                        height={102}
                        data={barGraphDataGenerator()}
                      />
                    </div>
                  </div>
                  <p className="font-light text-sm text-brand-text-tertiary">
                    Jan 2, 08:18:00
                  </p>
                </div>
              }
            />
          </CardsContainer>
        </Wrapper>
      </Container>
    </main>
  );
}
