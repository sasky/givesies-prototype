import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GivesiesLandingPage() {
  return (
    <>
      <section className="w-full py-24 md:py-48 lg:py-64 xl:py-96 bg-secondary">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primary">
                Givesies
              </h1>
              <p className="mx-auto max-w-[700px] text-white text-xl md:text-2xl">
                Give to charity on your terms
              </p>
            </div>
            <div className="pt-8">
              <Button asChild
                size="lg"
                className="text-lg bg-gradient-to-r from-primary-hover to-primary hover:from-primary hover:to-primary-hover text-white transition-all duration-300"
              >
                {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
                <Link href="/charities">Explore Charities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-1 flex items-center justify-center bg-secondary px-4">
        <div className="max-w-2xl text-center">
          <p className="text-white text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </section>
    </>
  );
}
