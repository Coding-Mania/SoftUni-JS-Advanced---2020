export default class DatabaseProvider {
    constructor(rootURL) {
        this._rootURL = rootURL;
    }

    createTeam(team, token) {
        return fetch(this._rootURL + `/teams.json?auth=${token}`, {
            method: 'POST',
            body: JSON.stringify(team)
        })
            .then(x => x.json())
            .catch(console.error)
    }

    updateTeam(team, id, token) {
        return fetch(this._rootURL + `/teams/${id}.json?auth=${token}`, {
            method: 'PUT',
            body: JSON.stringify(team)
        })
            .then(x => x.json())
            .catch(console.error)
    }

    deleteTeam(id, token) {
        return fetch(this._rootURL + `/teams/${id}.json?auth=${token}`, {
            method: 'DELETE',
        })
            .then(x => x.json())
            .catch(console.error)
    }

    getAllTeams(token) {
        return fetch(this._rootURL + `/teams.json?auth=${token}`)
            .then(x => x.json())
            .catch(console.error);
    }

    getTeam(id,token) {
        return fetch(this._rootURL + `/teams/${id}.json?auth=${token}`)
            .then(x => x.json())
            .catch(console.error);
    }
}
