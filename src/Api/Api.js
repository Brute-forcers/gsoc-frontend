import axios from "axios";

const api = axios.create({
    baseURL: "https://gsoc-api.herokuapp.com"
});


export const getRepos = (orgName) => api.get(`/orgs/${orgName}`);
export const getIssues = (orgName, repoName) => api.get(`/orgs/${orgName}/${repoName}`);
export const getOrgs = () => api.get(`/orgs`);
