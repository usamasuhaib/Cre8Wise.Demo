using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Cre8Wise.Data;

/* This is used if database provider does't define
 * ICre8WiseDbSchemaMigrator implementation.
 */
public class NullCre8WiseDbSchemaMigrator : ICre8WiseDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
