import Link from "next/link";

export default function Page() {
    return(
        <section>
            <h1 className="mb-8 text-center text-2xl font-semibold tracking-tighter">
                Our Team
            </h1>
            <p className="mb-4">
                {`Meet the amazing team behind York University's GNCTR!`}
            </p>
            <h2 className="mb-4 text-center text-xl font-semibold tracking-tighter"> 
                Our Co-Captains
            </h2>
            <p>Olivia Alsop (She/Her) and Fayaz Rafin (He/Him) are this year's co-captains for our first ever GNCTR team!
            </p>
            </section>
    )
}