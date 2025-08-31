import GitHubCalendar from "react-github-calendar";

export function GithubContributions(){
    return(
        <div className=" w-[900px] mx-auto mt-5 p-5 rounded-2xl">
            <h2 className="text-white font-sans font-bold">GitHub Contributions</h2>
            <GitHubCalendar username="Arin-Chandrakar" colorScheme="light" hideColorLegend={true} style={{fontWeight:"bold", color:"White"}}/>
        </div>
    )
}