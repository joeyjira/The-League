require 'net/http'
require 'json'

class Api::NbaRecordController < ApplicationController
    def initialize
        response = Net::HTTP.get(URI('http://data.nba.net/10s/prod/v1/today.json'))
        parsed_links = JSON.parse("#{response}")
        @links = parsed_links["links"]
    end

    def teams
        team_link = @links["teams"]
        teams = JSON.pars("#{Net::HTTP.get(URI("http://data.nba.net#{team_link}"))}")
        parsed_teams = teams["league"]
        render(
            json: parsed_teams
        )
    end
    
    def standings
        standings = @links["leagueConfStandings"]
        render(
            json: Net::HTTP.get(URI("http://data.nba.net#{standings}"))
        )
    end
end
