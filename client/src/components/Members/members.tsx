import Image from "next/image";

export default function Members() {
  const members = [
    {
        id: 1,
        name: "Mark Henry",
        role: "Owner",
        image: "/assets/member.jpg",
    },
    {
        id: 2,
        name: "Lucky Helen",
        role: "Chef",
        image: "/assets/member.jpg",
    },
    {
        id: 3,
        name: "Moon Henry",
        role: "Founder",
        image: "/assets/member.jpg",
    },
    {
        id: 4,
        name: "Tom Monrow",
        role: "Specialist",
        image: "/assets/member.jpg",
    },
];
  return (
    <div>
      <section className="mx-auto mb-96 lg:mb-72 relative z-10 bg-white mt-10 md:mt-0 ">
        <div className="h-[40vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/Member_bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-[#AD1519D9]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center pb-24">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Team Member
            </h1>
            <p className="text-white text-center max-w-lg mt-3 px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>

          </div>
        </div>

        <div className="absolute top-44 left-0 right-0 mx-auto py-16 w-full">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {members.map((member) => (
              <div 
                key={member.id} 
                className="bg-white w-36 sm:w-40 md:w-40 lg:w-64 shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full aspect-square">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-1.5 text-center">
                  <h3 className="text-base lg:text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-xs lg:text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
