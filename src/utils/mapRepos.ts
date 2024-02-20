import { RepoProps } from '../types';

export const mapRepos = (repos: RepoProps[]): RepoProps[] => {
  return repos.map(repo => ({
      owner: repo.owner,
      id: repo.id,
      name: repo.name,
      stargazers_count: repo.stargazers_count, 
      html_url: repo.html_url,
      forks_count: repo.forks_count,
      open_issues_count: repo.open_issues_count
  }))
};
