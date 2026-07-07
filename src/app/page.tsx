import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Hero */}
        <section
          id="home"
          className="relative flex h-screen min-h-screen w-full items-center justify-center overflow-hidden bg-black"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src="/vid/heroVidMain.mp4" type="video/mp4" />
          </video>

          {/* Legibility overlays */}
          <div className="absolute inset-0 z-0 bg-black/55" />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-transparent to-black" />

          <div className="relative z-10 px-6 text-center">
            <h1 className="font-heading text-5xl leading-[0.92] tracking-wide text-white sm:text-7xl md:text-8xl lg:text-9xl">
              LOOK BETTER,
              <br />
              PERFORM BETTER,
              <br />
              <span className="text-brand">LIVE BETTER</span>
            </h1>
          </div>
        </section>

        {/* Temporary scroll test area — replaced by more sections later */}
        <section className="min-h-[200vh] bg-zinc-950" />
      </main>
    </>
  );
}
