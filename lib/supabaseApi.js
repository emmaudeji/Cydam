// Get all rows from a table
export const getAll = async (table) => await supabase
  .from(table)
  .select()

// Get specific columns from a table
export const getItemsInColumn = async (table, column) => supabase
  .from(table)
  .select(column)

// Create a table and return data or error
export const createRecord = async ({ table, id, name }) => {
  const { data, error } = await supabase
    .from(table)
    .insert({ id, name })
    .select()
  return { data, error };
}

// Create a table and return only error
export const createRecordWithError = async ({ table, id, name }) => {
  const { error } = await supabase
    .from(table)
    .insert({ id, name })
  return { error };
}

// Bulk creation
export const bulkCreateRecords = async ({ table, records }) => {
  const { error } = await supabase
    .from(table)
    .insert(records)
  return { error };
}

// Update by ID
export const updateRecordById = async ({ table, id, name }) => {
  const { error } = await supabase
    .from(table)
    .update({ name })
    .eq('id', id)
  return { error };
}

// Update by ID and return data or error
export const updateRecordByIdAndGet = async ({ table, id, name }) => {
  const { data, error } = await supabase
    .from(table)
    .update({ name })
    .eq('id', id)
    .select()
  return { data, error };
}

// Update a JSON object within a row
export const updateAddressByPostcode = async ({ table, postcode }) => {
  const { data, error } = await supabase
    .from(table)
    .update({
      address: {
        street: 'Melrose Place',
        postcode
      }
    })
    .eq('address->postcode', postcode)
    .select()
  return { data, error };
}

// Upsert and return data or error
export const upsertRecord = async ({ table, id, name }) => {
  const { data, error } = await supabase
    .from(table)
    .upsert({ id, name })
    .select()
  return { data, error };
}

// Delete by ID
export const deleteRecordById = async ({ table, id }) => {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq('id', id)
  return { error };
}

// Filtering with OR condition
export const filterRecordsWithOr = async ({ table, id, name }) => {
  const { data, error } = await supabase
    .from(table)
    .select('name')
    .or(`id.eq.${id}`, `name.eq.${name}`)
  return { data, error };
}

// Filtering with equality condition
export const filterRecordsByName = async ({ table, name }) => {
  const { data, error } = await supabase
    .from(table)
    .select()
    .eq('name', name)
  return { data, error };
}

// Chaining filters
export const filterRecordsByPopulationRange = async ({ table, minPopulation, maxPopulation }) => {
  const { data, error } = await supabase
    .from(table)
    .select('name, country_id')
    .gte('population', minPopulation)
    .lt('population', maxPopulation)
  return { data, error };
}

// Filters by values within a JSON
export const filterRecordsByPopulationJSON = async ({ table, minPopulation, maxPopulation }) => {
  const { data, error } = await supabase
    .from(table)
    .select('name, country_id')
    .gte('population', minPopulation)
    .lt('population', maxPopulation)
  return { data, error };
}

// filter multiple
export const filterRecordsWithSearch = async ({ table, searchQuery }) => {
    const { data, error } = await supabase
      .from(table)
      .select()
      .or(
        `name:ilike:%${searchQuery}%`,
        `description:ilike:%${searchQuery}%`,
        `category:ilike:%${searchQuery}%`
      )
    return { data, error };
  }
  

//   column is in array - values: ['a', 'b']
export const filterRecordsInList = async ({ table, column, values }) => {
    const { data, error } = await supabase
      .from(table)
      .select()
      .in(column, values)
    return { data, error };
  }
  

//   search for item in an array
export const filterRecordsInArray = async ({ table, column, searchQuery }) => {
    const { data, error } = await supabase
      .from(table)
      .select()
      .like(column, `%${searchQuery}%`, { any: true })
    return { data, error };
  }
  
//   in a json
export const filterRecordsInJson = async ({ table, column, field, searchQuery }) => {
    const { data, error } = await supabase
      .from(table)
      .select()
      .ilike(`${column}->>${field}`, `%${searchQuery}%`)
    return { data, error };
  }
  
//   like - case sensitive, ilike - case insensitive