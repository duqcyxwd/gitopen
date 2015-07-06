/* global module */
module.exports = {
  'home': '',
  'issues': '/tickets',
  'issues/id': '/tickets/{issue-id}',
  'issues/new': '/tickets#new-issue',
  'issues/new?title': '/issues#new-issue?title={title}',
  'wiki': '/wiki',
  'network': '/graphs/master',
  'tree': '/tree/{hash}',
  'blob': '/blob/{hash}',
  'commits': '/commits/master',
  'commits-with-branch': '/commits/{branch-name}',
  'milestones': '/milestones',
  'tags': '/tags',
  'releases': '/releases',
  'releases/new': '/releases/new',
  'releases/new-with-tag': '/releases/new?tag={tag}',
  'pulls': '/pull',
  'pulls/new': '/pull/new',
  'pulls/new-with-branch': '/pull/new#{branch-A}...{branch-B}',
};