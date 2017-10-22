export const getTeams = () =>
    $.ajax({
        method: "GET",
        url: "api/nba_records/teams"
    });

export const getStandings = () =>
    $.ajax({
        method: "GET",
        url: "/api/nba_records/standings"
    });