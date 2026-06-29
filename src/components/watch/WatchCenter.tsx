import "./WatchCenter.css";
import { useMemo, useState } from "react";
import { watchData } from "../../data/watchData";
import {
  FaPlay,
  FaClock,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function WatchCenter() {
  const [activeSeries, setActiveSeries] =
    useState("classic");

  const [openSeason, setOpenSeason] =
    useState<number | null>(1);
    const [search, setSearch] = useState("");

  const series = useMemo(
    () => [
      {
        id: "classic",
        title: "Classic",
        data: watchData.classic,
      },
      {
        id: "alienForce",
        title: "Alien Force",
        data: watchData.alienForce,
      },
      {
        id: "ultimateAlien",
        title: "Ultimate Alien",
        data: watchData.ultimateAlien,
      },
      {
        id: "omniverse",
        title: "Omniverse",
        data: watchData.omniverse,
      },
      {
        id: "movies",
        title: "Movies",
        data: watchData.movies,
      },
    ],
    []
  );

  const currentSeries =
    series.find(
      (item) => item.id === activeSeries
    );

  const totalEpisodes =
    watchData.classic.reduce(
      (a, b) => a + b.episodes.length,
      0
    ) +
    watchData.alienForce.reduce(
      (a, b) => a + b.episodes.length,
      0
    ) +
    watchData.ultimateAlien.reduce(
      (a, b) => a + b.episodes.length,
      0
    ) +
    watchData.omniverse.reduce(
      (a, b) => a + b.episodes.length,
      0
    );

  return (
    <section
      id="watch"
      className="watch-section"
    >
      <div className="watch-header">

        <span className="watch-tag">
          STREAMING CENTER
        </span>

        <h2>
          WATCH BEN 10
        </h2>

        <p>
          Stream every Ben 10 series,
          season and movie in Tamil.
        </p>

      </div>

      <div className="watch-stats">

        <div className="watch-stat-card">
          <h3>{totalEpisodes}</h3>
          <span>Total Episodes</span>
        </div>

        <div className="watch-stat-card">
          <h3>18</h3>
          <span>Seasons</span>
        </div>

        <div className="watch-stat-card">
          <h3>9</h3>
          <span>Movies</span>
        </div>

      </div>
      <div className="watch-search">

<input
type="text"
placeholder="Search episode or movie..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

      <div className="series-tabs">

        {series.map((item) => (

          <button
            key={item.id}
            className={
              activeSeries === item.id
                ? "active-tab"
                : ""
            }
            onClick={() => {
              setActiveSeries(item.id);
              setOpenSeason(1);
            }}
          >
            {item.title}
          </button>

        ))}

      </div>

      {activeSeries === "movies" ? (

        <div className="movies-grid">

          {(currentSeries?.data as any[])
.filter(movie =>
movie.title
.toLowerCase()
.includes(search.toLowerCase())
)
.map(
            (movie, index) => (

              <div
                className="movie-card premium-card"
                key={index}
              >

                <h3>{movie.title}</h3>

                <div className="episode-meta">

                  <span>
                    <FaClock />
                    {movie.duration}
                  </span>

                  <span>
                    <FaGlobe />
                    {movie.language}
                  </span>

                </div>

                <a
  href={movie.url}
  className="watch-btn"
>
                  <FaPlay />
                  Watch Movie
                </a>

              </div>

            )
          )}

        </div>

      ) : (

        (currentSeries?.data as any[]).map(
          (season) => (

            <div
              className="season-card"
              key={season.season}
            >

              <div
                className="season-header"
                onClick={() =>
                  setOpenSeason(
                    openSeason === season.season
                      ? null
                      : season.season
                  )
                }
              >

                <div>

                  <h3>
                    Season {season.season}
                  </h3>

                  <p>
                    {
                      season.episodes.length
                    }{" "}
                    Episodes
                  </p>

                </div>

                {openSeason ===
                season.season ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}

              </div>

              {openSeason ===
                season.season && (

                <div className="episodes-grid">

                  {season.episodes
.filter((episode:any)=>

episode.title
.toLowerCase()
.includes(search.toLowerCase())

||

String(episode.number)
.includes(search)

)

.map(
                    (
                      episode: any
                    ) => (

                      <div
                        className="episode-card premium-card"
                        key={
                          episode.number
                        }
                      >

                        <span className="episode-number">
                          Episode{" "}
                          {
                            episode.number
                          }
                        </span>

                        <h4>
                          {
                            episode.title
                          }
                        </h4>

                        <div className="episode-meta">

                          <span>

                            <FaClock />

                            {
                              episode.duration
                            }

                          </span>

                          <span>

                            <FaGlobe />

                            {
                              episode.language
                            }

                          </span>

                        </div>

                      <a
  href={episode.url}
  className="watch-btn"
>
                          <FaPlay />

                          Watch

                        </a>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>

          )
        )

      )}

    </section>
  );
}