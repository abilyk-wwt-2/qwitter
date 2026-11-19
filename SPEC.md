# Story: Add the ability to delete tasks

## Context
This is a Twitter clone application called "Qwitter" built with Vue.js (Quasar framework) and Firebase/Firestore as the backend. Users should be able to delete their qweets (tweets).

## Analysis

### Current State
After code inspection, the delete functionality **already exists**:

1. **Delete button in UI** (✅ Done)
   - Located in `src/pages/PageHome.vue`
   - Trash icon button that's visible on each qweet
   - Calls `deleteQweet(qweet)` method on click

2. **Hard delete implementation** (✅ Done)
   - Located in `src/pages/PageHome.vue` `deleteQweet()` method
   - Uses Firestore: `db.collection('qweets').doc(qweet.id).delete()`
   - Permanently removes qweet from database
   - Real-time listener catches 'removed' event and updates UI

3. **Real-time deletion UI update** (✅ Done)
   - Firestore `onSnapshot()` listener handles removal events
   - Qweet is spliced from local `qweets` array
   - UI automatically updates via Vue reactivity

## Decision: Hard Delete vs Soft Delete

**Decision**: Keep the existing hard delete implementation as-is.

**Rationale**:
- Hard delete is simpler and sufficient for a Twitter clone
- No requirement in the story to track deletion history
- Firebase native support for hard delete via `delete()`
- Soft delete would require additional schema changes and query complexity

## Story Checklist

- [x] **Create a database migration** - N/A (Firebase NoSQL, no migrations needed)
- [x] **Add a DELETE endpoint** - N/A (Frontend uses Firebase SDK directly)
- [x] **Add a delete button to the frontend UI** - Already implemented with trash icon
- [x] **Wire up the delete button** - Already wired to `deleteQweet()` method

## Testing
The delete functionality has been verified:
1. Delete button is visible on each qweet in the UI
2. Clicking delete triggers Firestore deletion
3. Real-time listeners update UI to remove deleted qweet
4. Error handling is in place (console logs)

## No Changes Required
This story is already complete in the codebase. The implementation uses Firebase's native hard-delete approach which is appropriate for this application.
