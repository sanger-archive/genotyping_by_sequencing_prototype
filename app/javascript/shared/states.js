export default [
  { name: 'pending', variant: 'primary', filter: true,
    inbox_description: 'Plates awaiting work',
    summary: 'Plates awaiting work'
  },
  { name: 'pre-pooling', variant: 'warning', filter: true,
    inbox_description: 'Plates in the process of having tags and primer panels applied',
    summary: 'Apply primer panels and tags in PCR1 and PCR2'
  },
  { name: 'pooling', variant: 'danger', filter: true,
    inbox_description: 'Plates ready for pooling',
    summary: 'Pool up to four plates into a single tube'
  },
  { name: 'post-pooling', variant: 'success', filter: true,
    inbox_description: 'Pooled tubes in the final clean-up',
    summary: 'Normalize and clean-up tubes'
  },
  { name: 'unfiltered', variant: 'info', filter: false,
    inbox_description: 'All work, past and present',
    summary: ''
  },
  { name: 'completed', variant: 'info', filter: true,
    inbox_description: 'Tube which have been released to sequencing',
    summary: ''
  }
]
