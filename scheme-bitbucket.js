/* global module */
module.exports = {
  'home': '',
  'issues': '/issues',
  'issues/id': '/issues/{issue-id}',
  'issues/new': '/issues/new',
  'issues/new?title': '/issues/new?title={title}',
  'issue': '/issues/{issue-id}',
  'wiki': '/wiki',
  'network': '/network',
  'tree': '/src/{hash}',
  'blob': '/src/{hash}',
  'commits': '/commits',
  'commits-with-branch': '/commits/{branch-name}',
  'milestones': '/milestones',
  'tags': '/tags',
  'releases': '/releases',
  'releases/new': '/releases/new',
  'releases/new-with-tag': '/releases/new?tag={tag}',
  'pulls': '/pull-requests',
  'pulls/new': 'pull-request/new',
  'pulls/new-with-branch': '/pull-request/new/{branch-A}...{branch-B}', // FIXME
};