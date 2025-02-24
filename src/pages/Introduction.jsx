export function Introduction() {
    const profileImg = "https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/404257743_3713422548984083_2835995974327489644_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wzvOm5zaiI0Q7kNvgHCYYX8&_nc_oc=AdhKqy1WeoD-nzZhhhaLQUqhwYAEbWPJD3SXdx4iSTreMx57JV43MBwyVZzHefP9FR4&_nc_zt=23&_nc_ht=scontent.fmnl17-3.fna&_nc_gid=AIomaYQZWjPeCqwk6Bbfrd1&oh=00_AYC6WMwwnTqpbU6V50w2m7ikqp7ERt232rjhpnDehiuvQw&oe=67BF4AE9";

    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen px-6 md:px-20 gap-8 md:gap-16">
            
            {/* Image Section - Appears on Top in Small Screens */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="relative w-56 h-56 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Text Section - Below Image in Small Screens */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <p className="text-3xl md:text-4xl text-white font-bold pb-4">Hey, I'm Diamond Rivero</p>
                <p className="text-4xl md:text-6xl text-blue-400 font-mono font-bold leading-tight">
                    Enthusiastic about computers and anything related!
                </p>
            </div>
        </div>
    );
}
