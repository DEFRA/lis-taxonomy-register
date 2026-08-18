import { describe, expect, it } from 'vitest'

import * as packageExports from '../src/index.js'
import { taxonomy } from '../src/taxonomy.js'

describe('package exports', () => {
  it('re-exports the register taxonomy definition', () => {
    expect(packageExports.taxonomy).toBe(taxonomy)
    expect(taxonomy).toEqual({
      id: 'register',
      label: 'Register',
      summary: 'Capture livestock registration activity and related checks.'
    })
  })
})
